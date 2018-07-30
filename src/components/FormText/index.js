import React, { Component } from "react";
import { FieldArray, Field, reduxForm } from "redux-form";
import options from "./options";
import DropDownOptions from "./DropDownOptions";
import { connect } from "react-redux";

const arrayComponent = ({ fields, meta, options, removeElement, ...rest }) => {
  return (
    <div>
      <Field
        name="search"
        component="input"
        type="text"
        autoComplete="off"
        placeholder="Buscar..."
      />
      <Field
        name="search"
        component={DropDownOptions}
        options={options}
        handlePushField={field => {
          fields.push(field);
        }}
      />

      {fields.length > 0 && <p>Seleccionados</p>}
      {fields.map((option, index) => {
        return (
          <Field
            name={`${option}`}
            key={index}
            component={({ input: { value } }) => {
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => {
                    removeElement(value);
                    fields.remove(index);
                  }}
                >
                  {value.label}
                </button>
              );
            }}
          />
        );
      })}
    </div>
  );
};

class FieldArrayComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valuesSearch: props.valuesSearch,
      options: props.options
    };
  }

  removeElement = elem => {
    const { options } = this.state;
    console.log("options", options);
    const optionsClone = options.splice();
    console.log("optionsClone", optionsClone);
  };

  render() {
    const { valuesSearch, options } = this.state;
    return (
      <FieldArray
        name="search-array"
        component={arrayComponent}
        options={options}
        removeElement={this.removeElement}
      />
    );
  }
}

const mapStateToProps = (state, { formName = "textito", ...rest }) => {
  if (!state.form[formName]) {
    return { valuesSearch: [] };
  }
  if (!state.form[formName].values) {
    return { valuesSearch: [] };
  }
  if (!state.form[formName].values["search-array"]) {
    return { valuesSearch: [] };
  }
  return { valuesSearch: state.form[formName].values["search-array"] };
};

const FieldArrayComponentConnec = connect(mapStateToProps)(FieldArrayComponent);

export const FormText = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <FieldArrayComponentConnec options={options(10)} />
      {/* <button type="submit">Submit</button> */}
    </form>
  );
};

export default reduxForm({ form: "textito" })(FormText);
