package ma.fstt.repo;

import ma.fstt.entity.MapEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MapRepo extends JpaRepository<MapEntity,Long> {
}
