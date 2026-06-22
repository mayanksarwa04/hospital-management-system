package com.hms.backend.users.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class AdminDashboardSummaryResponse {

    private long totalUsers;
    private long activeUsers;
    private long inactiveUsers;
    private long lockedUsers;

    private long totalAdmins;
    private long totalDoctors;
    private long totalNurses;
    private long totalPharmacists;
    private long totalPatients;
    private long totalReceptionists;
}