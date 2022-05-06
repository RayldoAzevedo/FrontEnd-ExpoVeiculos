import React from 'react'

const ListVeiculos = () =>{
        return (
            <>
                <div className='container'>
                    <div class="row">
                        <div class="col s12 m6 l4">
                            <div class="card row">
                                        <div class="card-title blue-grey darken-1">Rafael Maverick</div>
                                <div class="card-image waves-effect waves-block waves-light">
                                    
                                    <div class="card-content">
                                        <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
                                        <p><a href="#">This is a link</a></p>
                                    </div>
                                </div>

                                <div class="card-reveal">
                                    <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </>
         )
}

export default ListVeiculos;

