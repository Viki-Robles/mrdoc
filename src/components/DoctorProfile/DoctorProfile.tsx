import React from "react";
import { useParams } from "react-router-dom";
import { Box, Grid, Text, Image } from "theme-ui";
import { useFetchDoctorsById } from "../../hooks/useFetchDoctorsById/useFetchDoctorsById";
import avatar from "../../images/avatar.png";

export default function DoctorProfile(): JSX.Element | null {
  const { doctor_id } = useParams<{
    doctor_id: string;
  }>();
  const { data: getDoctorById } = useFetchDoctorsById(doctor_id);

  if (getDoctorById?.doctors) {
    const doctorData = getDoctorById.doctors[0];
    return (
      <Grid
        sx={{
          backgroundColor: "bright",
          width: "100%",
          maxWidth: "80vh",
          borderRadius: 8,
          boxShadow: "lg",
          gap: 0,
          p: 4,
        }}
      >
        <Grid sx={{ gridTemplateColumns: "350px 1fr" }}>
          <Image src={avatar} variant="images.avatarProfile" />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Text sx={{ fontSize: 6, fontWeight: "medium" }}>
              Dr. {`${doctorData.first_name} ${doctorData.last_name}`}
            </Text>
            <Text sx={{ color: "neutral.500", fontWeight: "medium", pb: 4 }}>
              {doctorData.profession}
            </Text>
            <div>
              <Text
                sx={{
                  display: "inline-block",
                  fontWeight: "medium",
                  border: "1px transparent",
                  bg: "#F8DEAC",
                  colour: "#f59e0b",
                  borderRadius: "20px",
                  padding: "4px 16px",
                  mb: 4,
                }}
              >
                {doctorData.languages}
              </Text>
            </div>

            <Text sx={{ color: "neutral.500" }}>{doctorData.details}</Text>
            <Text></Text>
          </Box>
        </Grid>
      </Grid>
    );
  }
  return null;
}
