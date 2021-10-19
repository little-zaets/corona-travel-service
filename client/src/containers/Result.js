import { React, Component } from "react";

class Result extends Component {
  render() {
    const { result } = this.props;

    return (
      <div style={{ maxWidth: "600px", margin: "20px auto 0" }}>
        <div className={"result-dropdown-container"}>
          <details>
            <summary>Summary: {result.data.area.name}</summary>
            <div
              dangerouslySetInnerHTML={{
                __html: result.data.summary
              }}
            />
          </details>
        </div>
        <div className={"result-dropdown-container"}>
          <details>
            <summary>Transportation</summary>
            <div
              dangerouslySetInnerHTML={{
                __html: result.data.areaAccessRestriction.transportation.text
              }}
            />
          </details>
        </div>
        <div className={"result-dropdown-container"}>
          <details>
            <summary>Declaration Documents</summary>
            <div>
              <div>
                <b>Mandatory: </b>
                {
                  result.data.areaAccessRestriction.declarationDocuments
                    .documentRequired
                }
              </div>
              <div>
                <span
                  dangerouslySetInnerHTML={{
                    __html:
                      result.data.areaAccessRestriction.declarationDocuments
                        .text
                  }}
                />
              </div>
            </div>
          </details>
        </div>
        <div className={"result-dropdown-container"}>
          <details>
            <summary>Disease Testing</summary>
            <div>
              <div>
                <b>Mandatory: </b>
                {result.data.areaAccessRestriction.diseaseTesting.isRequired}
              </div>
              <br />
              <div>
                <span
                  dangerouslySetInnerHTML={{
                    __html:
                      result.data.areaAccessRestriction.diseaseTesting.text
                  }}
                />
              </div>
            </div>
          </details>
        </div>
        <div className={"result-dropdown-container"}>
          <details>
            <summary>Vaccination</summary>
            <div>
              <div>
                <b>Mandatory: </b>
                {
                  result.data.areaAccessRestriction.diseaseVaccination
                    .isRequired
                }
              </div>
              <br />
              <div>
                <span
                  dangerouslySetInnerHTML={{
                    __html:
                      result.data.areaAccessRestriction.diseaseVaccination.text
                  }}
                />
              </div>
            </div>
          </details>
        </div>
      </div>
    );
  }
}

export default Result;
