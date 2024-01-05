package ma.fst.repo;

import ma.fst.entity.LogisticEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface LogisticRepo extends JpaRepository<LogisticEntity,Long> {
    @Query("SELECT a FROM LogisticEntity a WHERE a.userId = :userId")
    List<LogisticEntity> findByUserId(@Param("userId") Long userId);
}
