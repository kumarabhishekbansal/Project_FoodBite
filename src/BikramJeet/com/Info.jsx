import React from "react";
function Info({ formData, setFormData }) {
  return (
    <div className="other-info-container">
      
      <input
      style={{'padding':'2px'}}
        type="file"
        placeholder="AA"
        title=""
        value={formData.Dob}
        onChange={(e) => {
          setFormData({ ...formData, Profile: e.target.value });
        }}
      />
      
    
    </div>
  );
}

export default Info;