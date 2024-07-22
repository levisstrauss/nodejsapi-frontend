import React, { useEffect, useState } from 'react';
import { getPatients } from '../services/patientServices';
import  Patient  from '../utils/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';




const Dashboard = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // For loading state
  const [error, setError] = useState<string | null>(null); // For error state
  
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await getPatients();
        console.log('Fetched patients response:', response);

        // Ensure response.data is an array
        if (response && Array.isArray(response.data)) {
          setPatients(response.data);
        } else {
          console.error('Expected response.data to be an array but got:', response);
        }
      } catch (error) {
        console.error('Error fetching patients:', error);
        setError('Error fetching patients');
      } 
    };
    fetchPatients();
  }, []);

  return (
    <div className="container">
      <div className="content contact-list">
        <div className="card card-default">
          <div className="card-header align-items-center px-3 px-md-5">
            <h2>Patients Board</h2>
            <button type="button" className="btn btn-primary">Add Patient</button>
          </div>
          <div className="card-body px-3 px-md-5">
            {loading && <p>Loading...</p>}
            {error && <p className="text-danger">{error}</p>}
            <div className="row">
              {patients.length > 0 ? (
                patients.map((patient) => (
                  <div key={patient.id} className="col-lg-6 col-xl-4 col-md-6 col-sm-12">
                    <div className="card card-default p-4">
                      <a href="javascript:void(0)" className="media text-secondary" data-toggle="modal" data-target="#modal-contact">
                        <img 
                          src="https://bootdey.com/img/Content/avatar/avatar1.png" 
                          style={{ width: '100px', height: '100px', objectFit: 'cover' }} 
                          className="mr-3 rounded" 
                          alt="Avatar" 
                        />
                        <div className="media-body">
                          <h5 className="mt-0 mb-2 text-dark">{patient.first_name} {patient.last_name}</h5>
                          <ul className="list-unstyled text-smoke">
                            <li className="d-flex">
                              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1" />
                              <span>{patient.address}</span>
                            </li>
                            <li className="d-flex">
                              <FontAwesomeIcon icon={faEnvelope} className="mr-1" />
                              <span>{patient.email}</span>
                            </li>
                            <li className="d-flex">
                              <FontAwesomeIcon icon={faPhone} className="mr-1" />
                              <span>{patient.phone}</span>
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                  </div>
                ))
              ) : (
                !loading && <p>No patients found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
