import { useState } from "react";
import { BsCheckLg, BsCircleFill } from "react-icons/bs";
import { FaLeaf } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";
const Password = () => {
  const [type, settype] = useState();
  const [lower, setlower] = useState(false);
  const [upper, setupper] = useState(false);
  const [special, setspecial] = useState(false);
  const [length, setlength] = useState(false);
  const [number, setnumber] = useState(false);
  const setinput = (value) => {
    const lower = new RegExp("(?=.*[a-z])");
    const upper = new RegExp("(?=.*[A-Z])");
    const special = new RegExp("(?=.*[!@#$%^&*())])");
    const number = new RegExp("(?=.*[0-9])");
    const length = new RegExp("(?=.{8,})");
    if (lower.test(value)) {
      setlower(true);
    } else {
      setlower(false);
    }
    if (upper.test(value)) {
      setupper(true);
    } else {
      setupper(false);
    }
    if (special.test(value)) {
      setspecial(true);
    } else {
      setspecial(false);
    }
    if (length.test(value)) {
      setlength(true);
    } else {
      setlength(false);
    }
    if (number.test(value)) {
      setnumber(true);
    } else {
      setnumber(false);
    }
  };
  return (
    <>
      <div className="inputpanel">
        <input
          type={type}
          placeholder="Password"
          className="w-100 p-2 my-4 rounded"
          requigray
          onChange={(e) => setinput(e.target.value)}
        />
        {type === "password" ? (
          <span
            className="ininput"
            onClick={() => {
              settype("text");
            }}
          >
            <FiEyeOff />
          </span>
        ) : (
          <span
            className="ininput"
            onClick={() => {
              settype("password");
            }}
          >
            <FiEye />
          </span>
        )}

        <main className="bg-white">
          <div className="size  text-secondary fw-bold">
            make your password strong by adding:
          </div>
          <div
            className={`size 
                        ${lower ? "green mx-1" : "gray mx-1"}
                      `}
          >
            {lower ? (
              <span className="check">
                <BsCheckLg className="green mx-1"/>
              </span>
            ) : (
              <span className="cir">
                <BsCircleFill className="gray mx-1" />
              </span>
            )}
            minimum one lowercase letter(a-z)
          </div>

          <div
            className={`size 
                        ${upper ? "green mx-1" : "gray mx-1"}
                      `}
          >
            {upper? (
              <span className="check">
                <BsCheckLg className="green mx-1"/>
              </span>
            ) : (
              <span className="cir">
                <BsCircleFill className="gray mx-1" />
              </span>
            )}minimum one uppercase letter(A-Z)
          </div>

          <div
            className={`size 
                        ${special ? "green mx-1" : "gray mx-1"}
                      `}
          >
            {special ? (
              <span className="check">
                <BsCheckLg className="green mx-1"/>
              </span>
            ) : (
              <span className="cir">
                <BsCircleFill className="gray mx-1" />
              </span>
            )}minimum one special character(!~`@#$%^&*())
          </div>

          <div
            className={`size 
                        ${length ? "green mx-1" : "gray mx-1"}
                      `}
          >
            {length ? (
              <span className="check">
                <BsCheckLg className="green mx-1"/>
              </span>
            ) : (
              <span className="cir">
                <BsCircleFill className="gray mx-1" />
              </span>
            )}minimum 8 character(letters & numbers)
          </div>
          <div
            className={`size 
                        ${number ? "green mx-1" : "gray mx-1"}
                      `}
          >
           {number ? (
              <span className="check">
                <BsCheckLg className="green mx-1"/>
              </span>
            ) : (
              <span className="cir">
                <BsCircleFill className="gray mx-1" />
              </span>
            )} minimum 1 number (0-9)
          </div>
        </main>
      </div>
    </>
  );
};
export default Password;
