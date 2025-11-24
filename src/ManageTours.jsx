import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import ViewAllTours from './ViewAllTours'
import CreateTour from './CreatTour'
import UpdateTour from './UpdateTours'
import DeleteTour from './DeleteTour'

function ManageTours() {
  return (
    <div className="container mt-4">
      <a href="/admin" className="text-decoration-none mb-3 d-inline-block">
        ← Back to Dashboard
      </a>
      <h3 className="fw-bold mb-4">Manage Tours</h3>


      <ul className="nav nav-tabs mb-4 nav-fill mb-4 w-100" id="tourTabs" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="view-tab"
            data-bs-toggle="tab"
            data-bs-target="#view"
            type="button"
            role="tab"
            aria-controls="view"
            aria-selected="true"
          >
            View All Tours
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="create-tab"
            data-bs-toggle="tab"
            data-bs-target="#create"
            type="button"
            role="tab"
            aria-controls="create"
            aria-selected="false"
          >
            Create Tour
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="update-tab"
            data-bs-toggle="tab"
            data-bs-target="#update"
            type="button"
            role="tab"
            aria-controls="update"
            aria-selected="false"
          >
            Update Tour
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="delete-tab"
            data-bs-toggle="tab"
            data-bs-target="#delete"
            type="button"
            role="tab"
            aria-controls="delete"
            aria-selected="false"
          >
            Delete Tour
          </button>
        </li>
      </ul>

      
      <div className="tab-content" id="tourTabsContent">
        <div
          className="tab-pane fade show active"
          id="view"
          role="tabpanel"
          aria-labelledby="view-tab"
        >
          <ViewAllTours />
        </div>

        <div
          className="tab-pane fade"
          id="create"
          role="tabpanel"
          aria-labelledby="create-tab"
        >
          <CreateTour />
        </div>

        <div
          className="tab-pane fade"
          id="update"
          role="tabpanel"
          aria-labelledby="update-tab"
        >
          <UpdateTour />
        </div>

        <div
          className="tab-pane fade"
          id="delete"
          role="tabpanel"
          aria-labelledby="delete-tab"
        >
          <DeleteTour />
        </div>
      </div>
    </div>
  );
}

export default ManageTours;
