import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const Contact = () => {
    return (
        <>
            <div class="col-md-4 mb-3 mb-md-0">
                <div class="card py-4 h-100">
                    <div class="card-body text-center">
                        <FontAwesomeIcon pull = "right" size="lg" icon={faEnvelope} />
                        <h4 class="text-uppercase m-0">Email</h4>
                        <hr class="my-4" />
                        <div class="small text-black-50">
                            <a href="mailto:dmayers340@gmail.com.com?Subject=GlasgowARVR-%20Contacting%20After%20Visiting%20Your%20Website">Email Me</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-3 mb-md-0">
                <div class="card py-4 h-100">
                    <div class="card-body text-center">
                    <FontAwesomeIcon pull = "right" size="lg" icon={['fab', 'twitter']} />                            
                    <h4 class="text-uppercase m-0">Twitter</h4>
                        <hr class="my-4" />
                        <div class="small text-black-50">
                            <a href="https://twitter.com/ARVRGlasgow">Find me on Twitter</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}