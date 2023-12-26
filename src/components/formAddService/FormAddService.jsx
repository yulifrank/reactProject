import { useState } from "react"; 
import { observer } from 'mobx-react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Swal from 'sweetalert2'
import BusinessStore from '../../stores/businessDetails'
import Image29 from "../../assets/images/29.jpg";


const FormSetService = observer(({ servNum = 0 }) => {
    const serv = BusinessStore.businessServices.find(
        (serv) => serv.id === String(servNum)
   
    );
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        id:String(BusinessStore.businessServices.length),
        name: "",
        describtion: "",
        price: "",
        image: Image29,
        image2:Image29,
        image3: Image29
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (event) => {
        if (formData.name !== '' && formData.describtion !== '' && formData.price !== '') {
            Swal.fire({
                title: "Do you want to save the changes?",
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "Save",
                denyButtonText: `Don't save`
            }).then((result) => {
                if (result.isConfirmed) {
                    // Swal.fire("Saved!", "", "success");
                    event.preventDefault();
                    BusinessStore.addService(formData);

                } else if (result.isDenied) {
                    Swal.fire("Changes are not saved", "", "info");
                }
            });


        }
        else {
            Swal.fire({
                title: "Error!",
                text: "required filds",
                imageUrl: X,
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: "image"
            });

        }

        // Reset the form after submitting
        setFormData({
            id:BusinessStore.businessServices.length,
            name: "",
            describtion: "",
            price: "",
            image: "",
            image2:"",
            image3: ""
        });
        setIsOpen(false);
    };
    return (
        <>
            <Button variant="contained" onClick={() => setIsOpen(true)}>הוספת שירות</Button>

            <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
                <DialogTitle>  הוספת שירות לעסק </DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit} className="Form">
                        <div className="PopupsInput">
                            <TextField
                                fullWidth
                                label="service name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder=" service name"
                            />
                        </div>
                        <div className="PopupsInput">
                            <TextField
                                fullWidth
                                label=" service describtion"
                                name="describtion"
                                value={formData.describtion}
                                onChange={handleInputChange}
                                placeholder="service describtion"
                            />
                        </div>

                        <div className="PopupsInput">

                            <TextField
                                fullWidth
                                label="  service Price"
                                name="price"
                                value={formData.price}
                                onChange={handleInputChange}
                                placeholder="service Price"
                            />
                        </div>



                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setIsOpen(false)}>Cancel</Button>
                    <Button type="submit" onClick={handleSubmit}>Submit</Button>
                </DialogActions>
            </Dialog>
        </>
    )
})

export default FormSetService
