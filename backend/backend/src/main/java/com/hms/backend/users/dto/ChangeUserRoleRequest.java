package com.hms.backend.users.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ChangeUserRoleRequest {

    @NotBlank(message = "Role code is required")
    private String roleCode;
}