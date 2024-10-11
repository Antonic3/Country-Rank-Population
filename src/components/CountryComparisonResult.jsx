import { formatArea, formatPopulation } from "../utils";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function CompareResult({ data }) {
  const { country1, country2 } = data;

  const head = {
    fontFamily: "Poppins, sans-serif",
    fontWeight: 700,
  };

  return (
    <div className="flex gap-10">
      <TableContainer component={Paper} sx={{ width: "50%" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={head}>Country 1 Information</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell sx={head}>Country Name</TableCell>
              <TableCell>
                <div className="flex gap-5">
                  <img
                    width={40}
                    src={country1.flags.png}
                    alt={`the flags of ${country1.name.common}`}
                  />
                  <h2>{country1.name.common}</h2>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={head}>Country Code</TableCell>
              <TableCell>{country1.cca2}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={head}>Population</TableCell>
              <TableCell>{formatPopulation(country1.population)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={head}>Area</TableCell>
              <TableCell>{formatArea(country1.area)} km²</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={head}>Region</TableCell>
              <TableCell>{country1.region}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer component={Paper} sx={{ width: "50%" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={head}>Country 2 Information</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell sx={head}>Country Name</TableCell>
              <TableCell>
                <div className="flex gap-5">
                  <img
                    width={40}
                    src={country2.flags.png}
                    alt={`the flags of ${country2.name.common}`}
                  />
                  <h2>{country2.name.common}</h2>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={head}>Country Code</TableCell>
              <TableCell>{country2.cca2}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={head}>Population</TableCell>
              <TableCell>{formatPopulation(country2.population)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={head}>Area</TableCell>
              <TableCell>{formatArea(country2.area)} km²</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={head}>Region</TableCell>
              <TableCell>{country2.region}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}