import React, { Fragment } from "react";

const DoctorCard=(props)=>{
    console.log("rpops",props);
return(

    <Fragment>
 <div className="col-md-10 item-block animate-box" >
                <div className="fh5co-property" >

                    <div className="fh5co-property-innter">

                        <div
                       
                        >
                            <figure>
                                <div  className="img-responsive" alt="Apartment">{props.doctor.icon}</div>
                                <a href="#" className="tag">long term</a>
                            </figure>
                            <h3><a href="#">{props.doctor.specialist}</a></h3>
                           
                        </div>


                    </div>
                </div>
            </div>
    </Fragment>
)
}
export default DoctorCard;