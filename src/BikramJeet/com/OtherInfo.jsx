import React from "react";

function OtherInfo({ formData, setFormData }) {
  return (
    <div className="other-info-container">
      <input
        type="text"
        placeholder="Address..."
        value={formData.Address}
        onChange={(e) => {
          setFormData({ ...formData, Address: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="State..."
        value={formData.State}
        onChange={(e) => {
          setFormData({ ...formData, State: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="City..."
        value={formData.City}
        onChange={(e) => {
          setFormData({ ...formData, City: e.target.value });
        }}
      />

    </div>
  );
}

export default OtherInfo;