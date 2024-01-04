import React, { Fragment, useState } from "react";
import { Flex, Input, Box } from "theme-ui";
import { Doctor } from "../../types/doctors";
import DoctorItem from "../DoctorItem/DoctorItem";
import DoctorCountContainer from "../DoctorCountContainer/DoctorCountContainer";

export interface DoctorsGalleryItemsProps {
  data: Doctor[] | undefined;
}

export default function DoctorsGalleryItems({
  data,
}: DoctorsGalleryItemsProps): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");
  const doctorsSum = data?.length;

  return (
    <Fragment>
      <Box>
        <Input
          sx={{
            width: "100%",
            backgroundColor: "bright",
            border: "transparent",
            br: 8,
            mb: 6,
          }}
          placeholder="Search by language.."
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <DoctorCountContainer data={doctorsSum} />
        <Flex sx={{ gap: 4, flexWrap: "wrap" }}>
          {data &&
            data
              ?.filter((val) => {
                if (searchTerm === "") {
                  return val;
                } else if (
                  val.languages &&
                  val.languages
                    .toLocaleLowerCase()
                    .includes(searchTerm.toLocaleLowerCase())
                ) {
                  return val;
                }
              })
              .map(
                ({
                  first_name,
                  last_name,
                  doctor_id,
                  profession,
                  languages,
                }) => {
                  return (
                    <DoctorItem
                      key={doctor_id}
                      last_name={last_name}
                      first_name={first_name}
                      profession={profession}
                      languages={languages}
                      doctor_id={doctor_id}
                    />
                  );
                },
              )}
        </Flex>
      </Box>
    </Fragment>
  );
}
