import React from 'react'

const Apply = ({job}) => {
    function itemIsApplied(job){
       let id = job.id
       return id;
    }
    return (
        <div class="modal-dialog modal-fullscreen" id="applyModal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Apply For This Job</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <form class="row g-3" action="mailto:contact@naheemademola21@gmail.com">
                        <div class="col-md-6">
                            <label for="first-name" class="form-label">First Name</label>
                            <input type="text" class="form-control" id="first-name" />
                        </div>
                        <div class="col-md-6">
                            <label for="surname" class="form-label">Surname</label>
                            <input type="text" class="form-control" id="surname" />
                        </div>
                        
                        <div class="col-12">
                            <label for="inputAddress" class="form-label">Address</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="1234, Asajon way, Sangotedo" />
                        </div>
                        <div class="col-12">
                            <label for="inputAddress2" class="form-label">Permanent Home Address</label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div class="col-md-4">
                            <label for="school" class="form-label">School Attended</label>
                            <input type="text" class="form-control" id="school" />
                        </div>
                        <div class="col-md-4">
                            <label for="phone" class="form-label">Phone Number</label>
                            <input type="text" class="form-control" id="phone" />
                        </div>
                        <div class="col-md-4">
                            <label for="email" class="form-label">Email Address</label>
                            <input type="text" class="form-control" id="email" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputCity" class="form-label">City</label>
                            <input type="text" class="form-control" id="inputCity" />
                        </div>
                        <div class="col-md-4">
                            <label for="inputState" class="form-label">Gender</label>
                            <select id="inputState" class="form-select">
                            <option selected>Choose...</option>
                            <option>Male</option>
                            <option>Female</option>
                            </select>
                        </div>
                        <div class="col-md-2">
                            <label for="inputqualify" class="form-label">Highest Qualification</label>
                            <select id="inputqualify" class="form-select">
                            <option selected>Choose...</option>
                            <option>Postgraduate</option>
                            <option>Undergraduate</option>
                            <option>HND</option>
                            <option>OND</option>
                            <option>NCE</option>
                            <option>College</option>
                            </select>
                        </div>
                        <div class="col-12">
                            <div class="mb-3">
                                <label for="formFile" class="form-label">CV/Cover Letter</label>
                                <input class="form-control" type="file" id="formFile" />
                            </div>
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary">Apply</button>
                        </div>
                    </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onClock={() => itemIsApplied(job)}>Save changes</button>
                    </div>
                </div>
            </div>
      </div>
    )
}

export default Apply
