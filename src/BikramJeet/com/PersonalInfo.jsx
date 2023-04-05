import React,{useRef} from "react";

function PersonalInfo({ formData, setFormData }) {
  const ref = useRef()
  return (
    <div className="personal-info-container">
      <input
        type="text"
        placeholder="Name..."
        value={formData.firstName}
        onChange={(e) => {
          setFormData({ ...formData, Name: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="User Name..."
        value={formData.lastName}
        onChange={(e) => {
          setFormData({ ...formData, userName: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Date Of Birth..."
        value={formData.Dob}
        onFocus={(e) => (e.target.type = "date")}
        onBlur={(e) => (e.target.type = "text")}

        onChange={(e) => {
          setFormData({ ...formData, Dob: e.target.value });
        }}
      />
      <input
        type="number"
        max={10}
        placeholder="Contact..."
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, contact: e.target.value });
        }}
      />
    </div>
  );
}

export default PersonalInfo;