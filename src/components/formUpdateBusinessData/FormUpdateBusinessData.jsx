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
import { useEffect } from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';


const FormUpdateBusinessData = observer(({ func }) => {
    useEffect(() => {
        BusinessStore.initialBusinessDetails();
    
      },[])
    const [isOpen, setIsOpen] = useState(true);
    const [formData, setFormData] = useState({
        name: BusinessStore.businessDetails.name,
        address: BusinessStore.businessDetails.address,
        phone: BusinessStore.businessDetails.phone,
        owner: BusinessStore.businessDetails.owner,
        logo:  BusinessStore.businessDetails.logo,
        description:  BusinessStore.businessDetails.description

    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (event) => {
        if (formData.name !== '' && formData.phone !== '' && formData.address !== ''&& formData.description !== ''&& formData.owner !== '') {
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
                    BusinessStore.setBusinessDetails(formData);


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
      
        setIsOpen(false);
        func()
    };
    return (
        <>
            {/* <Button variant="contained"  style={{
          position: 'fixed',
          top: '12%',
          right: '40%',
        }} onClick={() => setIsOpen(true)}>לחץ כאן על מנת לשנות את פרטי העסק</Button> */}
            {/* <Fab color="blue"  onClick={() => setIsOpen(true)}  aria-label="add">
        <EditIcon />
      </Fab> */}
       
            <Dialog open={isOpen} onClose={() => {setIsOpen(false) ,func()}}>
                <DialogTitle>  שינוי פרטי עסק</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit} className="Form">
                        <div className="PopupsInput">
                            <TextField
                                fullWidth
                                label="business name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder=" business name"
                            />
                        </div>
                        <div className="PopupsInput">
                        <TextField
                                fullWidth
                                label="business address"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                placeholder=" business address"
                            />
                        </div>
                        <div className="PopupsInput">
                        <TextField
                                fullWidth
                                label="business phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder=" business phone"
                            />
                        </div>
                        <div className="PopupsInput">
                            <TextField
                                fullWidth
                                label=" business describtion"
                                name="describtion"
                                value={formData.description}
                                onChange={handleInputChange}
                                placeholder="business describtion"
                            />
                        </div>

                        <div className="PopupsInput">

                            <TextField
                                fullWidth
                                label="  business owner"
                                name="owner"
                                value={formData.owner}
                                onChange={handleInputChange}
                                placeholder="business owner"
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

export default FormUpdateBusinessData
