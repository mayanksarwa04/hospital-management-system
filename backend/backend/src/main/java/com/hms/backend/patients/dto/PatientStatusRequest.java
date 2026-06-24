package com.hms.backend.patients.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PatientStatusRequest {

    @NotNull(message = "Active status is required")
    private Boolean active;
}