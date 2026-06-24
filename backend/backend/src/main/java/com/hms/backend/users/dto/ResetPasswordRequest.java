package com.hms.backend.users.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ResetPasswordRequest {

    @NotBlank(message = "New password is required")
    @Size(min = 6, max = 30, message = "Password must be between 6 and 30 characters")
    private String newPassword;
}