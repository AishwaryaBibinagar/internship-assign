import React from "react";
import { Row, Col } from "antd";
import { useNavigate } from "react-router-dom";

function EmployeeHome() {
  const navigate = useNavigate();
  return (
    <div className="h-100 d-flex justify-content-center align-items-center">
      <Row gutter={[20, 20]}>
        <Col span={8}>
          <div
            className="p-5 primary-border card w-300 cursor-pointer align-items-center justify-content-center gap-3"
            onClick={() => {
              navigate("/employee/students");
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/3584/3584382.png"
              alt=""
              height={50}
              width={50}
            />
            <h1>Customers</h1>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default EmployeeHome;
