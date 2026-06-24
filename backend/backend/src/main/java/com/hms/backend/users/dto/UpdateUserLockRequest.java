package com.hms.backend.users.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UpdateUserLockRequest {

    @NotNull(message = "Account locked status is required")
    private Boolean accountLocked;
}