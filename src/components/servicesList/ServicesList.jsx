import SingleService from '../singleService/SingleService';
import BusinessStore from '../../stores/businessDetails'
import { observer } from 'mobx-react';
const ServicesList = observer(() => {

    return (
        <>
            <div>
                serviceeeee
            </div>   
            {BusinessStore.businessServices.map((c, i) => <a href={i} key={i} >{c.name}</a>)}

        </>
    );
});
export default ServicesList