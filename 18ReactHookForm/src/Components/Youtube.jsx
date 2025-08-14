import React, { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import "./Youtube.css";

function Youtube() {
  const form = useForm({
    defaultValues: {
      username: "Enter Username",
      email: "Enter Email",
      channel: "Enter Channel Name",
      Phone: ["+91", "+92"],
      social: {
        twitter: "",
        facebook: ""
      },
      phnumber: [{ number: "" }],
      age: 0,
      birth: ""
    },
    mode: "onChange" // so isValid updates live
  });

  const {
    register,
    control,
    handleSubmit,
    formState,
    watch,
    setValue,
    reset
  } = form;

  const { errors, isSubmitSuccessful, isValid } = formState;

  const { fields, append, remove } = useFieldArray({
    name: "phnumber",
    control
  });

  const onSubmit = (data) => {
    console.log("Submitted", data);
  };

  const usernameValue = watch("username");
  const emailValue = watch("email");

  function handlesetvalue() {
    setValue("username", "Pandey", { shouldValidate: true });
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div className="form-container">
      <div className="form-content">
        <div>
          <h1 style={{ marginBottom: "10px", color: "black" }}>Youtube Form</h1>
          <h2 style={{ marginBottom: "10px", color: "black" }}>
            Watch : {usernameValue}
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* Username */}
            <div>
              <label htmlFor="username">UserName</label>
              <br />
              <input
                type="text"
                id="username"
                {...register("username", {
                  required: {
                    value: true,
                    message: "Username is required"
                  }
                })}
              />
              <p style={{ color: "red" }}>{errors.username?.message}</p>
            </div>

            <br />

            {/* Email */}
            <div>
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="text"
                id="email"
                {...register("email", {
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "This email must be in a valid format"
                  },
                  validate: {
                    notadmin: (fieldValue) =>
                      fieldValue !== "admin@gmail.com" ||
                      "Enter a different email",
                    notbooble: (fieldValue) =>
                      !fieldValue.endsWith("booble.com") ||
                      "This email is not valid"
                  }
                })}
              />
              <p style={{ color: "red" }}>{errors.email?.message}</p>
            </div>

            <br />

            {/* Channel */}
            <div>
              <label htmlFor="channel">Channel Name</label>
              <br />
              <input
                type="text"
                id="channel"
                {...register("channel", {
                  required: {
                    value: true,
                    message: "This field is required"
                  }
                })}
              />
              <p style={{ color: "red" }}>{errors.channel?.message}</p>
            </div>

            <br />

            {/* Social Media */}
            <div>
              <label htmlFor="twitter">Twitter</label>
              <br />
              <input type="text" id="twitter" {...register("social.twitter")} />
            </div>

            <br />

            <div>
              <label htmlFor="facebook">Facebook</label>
              <br />
              <input
                type="text"
                id="facebook"
                {...register("social.facebook")}
              />
            </div>

            <br />

            {/* Static Phones */}
            <div>
              <label htmlFor="phone1">Phone No1</label>
              <br />
              <input type="text" id="phone1" {...register("Phone.0")} />
            </div>

            <br />

            <div>
              <label htmlFor="phone2">Phone No2</label>
              <br />
              <input type="text" id="phone2" {...register("Phone.1")} />
            </div>

            <br />

            {/* Dynamic Phone Numbers */}
            <div>
              <label>List Of Phone Numbers</label>
              <div>
                {fields.map((field, index) => (
                  <div key={field.id} style={{ marginBottom: "10px" }}>
                    <input
                      type="text"
                      {...register(`phnumber.${index}.number`)}
                    />
                    <br />
                    {index > 0 && (
                      <button
                        type="button"
                        onClick={() => remove(index)}
                        style={{ marginLeft: "10px" }}
                      >
                        Remove Phone Number
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => append({ number: "" })}
                  style={{ marginTop: "10px" }}
                >
                  Add Phone Number
                </button>
              </div>
            </div>

            <br />

            {/* Age */}
            <div>
              <label htmlFor="age">Age</label>
              <br />
              <input
                type="number"
                id="age"
                {...register("age", {
                  valueAsNumber: true,
                  required: {
                    value: true,
                    message: "Age is required"
                  }
                })}
              />
              <p style={{ color: "red" }}>{errors.age?.message}</p>
            </div>

            {/* Date Of Birth */}
            <div>
              <label htmlFor="birth">Date Of Birth</label>
              <br />
              <input
                type="date"
                id="birth"
                {...register("birth", {
                  valueAsDate: true,
                  required: {
                    value: true,
                    message: "Date Of Birth is required"
                  }
                })}
              />
              <p style={{ color: "red" }}>{errors.birth?.message}</p>
            </div>

            {/* Submit Button */}
            <button
              className="submitbtn"
              type="submit"
              disabled={!isValid}
            >
              Submit
            </button>

            <button
              className="submitbtn"
              type="button"
              onClick={handlesetvalue}
            >
              SetValue
            </button>

            <br />

            <button
              className="submitbtn"
              type="button"
              onClick={() => reset()}
            >
              Reset
            </button>
          </form>

          <DevTool control={control} />
        </div>
      </div>
    </div>
  );
}

export default Youtube;
