import React from 'react';
import { StartShoppingButton} from './ReusableComponants'; // Import both buttons


export default function About() {
  console.log('About component loaded'); // Debug message to confirm rendering

  const handleClose = () => {
    window.location.href = '/'; // Redirect to the homepage or another route
  };

  const handleStartShopping = () => {
    window.location.href = '/shop'; // Redirect to the shopping page
  };

  return (
    <>
      <button
        style={{
          position: 'fixed', // Make the button float
          top: '10px', // Position it below the navigation bar
          right: '10px', // Align it to the right
          zIndex: 1000, // Ensure it appears above other elements
          padding: '10px 15px',
          backgroundColor: '#007bff', // Optional: Button background color
          color: '#fff', // Optional: Button text color
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={handleClose} // Close the entire page
      >
        Close
      </button>
      <div
        className="about-container"
        style={{
          marginTop: '50px', // Increased to add more space from the top of the page
          paddingTop: '0px', // Added padding to prevent overlap with the navigation bar
          height: '85vh', // Fixed height for the pop-up
          width: '80vw', // Fixed width for the pop-up
          overflowY: 'auto', // Enable vertical scrolling
          overflowX: 'hidden', // Prevent horizontal scrolling
          margin: '0-2 auto', // Center horizontally
          border: '1px solid #ccc', // Optional: Add a border for better visibility
          borderRadius: '8px', // Optional: Add rounded corners
          backgroundColor: '#fff', // Optional: Set a background color
        }}
      >
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
            >
              <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse show"
            >
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse show"
            >
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center', // Center the buttons horizontally
            alignItems: 'center', // Center the buttons vertically
            gap: '20px', // Add more space between the buttons
            padding: '20px', // Add padding to prevent buttons from touching the border
          }}
        >
          <StartShoppingButton onClick={handleStartShopping} /> {/* Use the reusable button */}
          <button
            style={{
              padding: '10px 15px',
              backgroundColor: '#007bff', // Optional: Button background color
              color: '#fff', // Optional: Button text color
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            onClick={handleClose} // Close the entire page
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}
