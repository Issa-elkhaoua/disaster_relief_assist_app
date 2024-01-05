package ma.fstt.dto;

public class MapDTO {
    private Long mapId;
    private String location;
    private String details;

    public MapDTO() {
    }

    public MapDTO(Long mapId, String location, String details) {
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
