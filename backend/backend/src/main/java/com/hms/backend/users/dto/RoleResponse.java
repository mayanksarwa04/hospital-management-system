package com.hms.backend.users.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class RoleResponse {

    private Long roleId;
    private String roleCode;
    private String roleName;
    private String description;
}