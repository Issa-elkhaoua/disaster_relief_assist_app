package ma.fstt.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "map")
public class MapEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long mapId;
    private String location;
    private String details;

    public MapEntity() {
    }

    public MapEntity(Long mapId, String location, String details) {
        this.mapId = mapId;
        this.location = location;
        this.details = details;
    }

    public Long getMapId() {
        return mapId;
    }

    public void setMapId(Long mapId) {
        this.mapId = mapId;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }
}
