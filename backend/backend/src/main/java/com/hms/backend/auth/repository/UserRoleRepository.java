package com.hms.backend.auth.repository;

import com.hms.backend.auth.entity.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRoleRepository extends JpaRepository<UserRole, Long> {
    boolean existsByUserUserIdAndRoleRoleId(Long userId, Long roleId);

}