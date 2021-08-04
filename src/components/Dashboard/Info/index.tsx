import { IInfoProps } from "../types";
import { useQuery, gql } from "@apollo/client";
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from "styled-components";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";

const ProgressDiv = styled.div`
  display: block;
  margin: auto;
  text-align: center;
  .MuiCircularProgress-root {
    display: inline-block;
    margin-top: 25% !important;
    width: 100px !important;
    height: 100px !important;
  }
`;

const PinkSpan = styled.span`
  background-color: #ba1e68;
`;

const ContainerDiv = styled.div`
  padding: 10px;
  text-align: center;
`;

const SubContainerDiv = styled.div`
  padding: 10px;
  text-align: center;

`;

const SuccessDiv = styled.div`
  display: inline;
  .MuiSvgIcon-root {
    fill: green !important;
   
    font-size:2rem;
  }
  
`;
const FailureDiv = styled.div`
  display: inline;
  .MuiSvgIcon-root {
    fill: red !important;
  
    font-size:2rem;
  }
`;

const TextDiv = styled.div`
  font-size: 18px;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 650;
  line-height: 1.43;
  letter-spacing: 0.01071e;
  text-align: center;
`;

const StyledPN = styled.p`
  font-size: 18px;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 650;

  letter-spacing: 0.01071e;
  text-align: center;
  padding: 0px;
  margin: 0px;
`;

function Info(props: IInfoProps) {
  interface IInfo {
    launch: {
      id: string;
      launch_site: {
        site_name: string;
        site_id: string;
      };
      launch_year: string;
      launch_success: boolean;
      mission_id: string[];
      mission_name: string;
      rocket: {
        rocket: {
          description: string;
          name: string;
        };
      };
      details: string;
    };
  }

  const GET_INFO = gql`
    query GET_LAUNCH_INFO($launchId: ID!) {
      launch(id: $launchId) {
        id
        launch_site {
          site_name
          site_id
        }
        launch_year
        launch_success
        mission_id
        mission_name
        rocket {
          rocket {
            description
            name
          }
        }
        details
      }
    }
  `;

  var launchId = props.selectedLaunch.id;

  const { loading, error, data } = useQuery<IInfo>(GET_INFO, {
    variables: { launchId },
  });

  if (loading)
    return (
      <ProgressDiv>
        <CircularProgress />
      </ProgressDiv>
    );
  if (error) return <p>Error :(</p>;

  return (
    <ContainerDiv>
      {data ? (
        <div>
          <TextDiv>
            Mission Name: <PinkSpan>{data.launch.mission_name}</PinkSpan>
          </TextDiv>
          <TextDiv>
            Launch Status:{" "}
            {data.launch.launch_success ? (
              <PinkSpan>
                <SuccessDiv>
                  {" "}
                  Success 
                  <CheckIcon></CheckIcon>
                </SuccessDiv>
              </PinkSpan>
            ) : (
              <FailureDiv>
                Failure<CloseIcon></CloseIcon>
              </FailureDiv>
            )}{" "}
            Year: <PinkSpan>{data.launch.launch_year} </PinkSpan> Site:{" "}
            <PinkSpan>{data.launch.launch_site.site_name}</PinkSpan>
          </TextDiv>
          <StyledPN>Details:</StyledPN>
          <SubContainerDiv>{data.launch.details}</SubContainerDiv>
          <StyledPN>
            Rocket: <PinkSpan>{data.launch.rocket.rocket.name}</PinkSpan>{" "}
          </StyledPN>

          <SubContainerDiv>{data.launch.rocket.rocket.description}</SubContainerDiv>
        </div>
      ) : null}
    </ContainerDiv>
  );
}

export default Info;
