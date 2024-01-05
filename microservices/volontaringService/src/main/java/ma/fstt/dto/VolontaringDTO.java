package ma.fstt.dto;

public class VolontaringDTO {
    private Long volontaringId;

    private String skill;
    private String availability;

    public VolontaringDTO() {
    }

    public VolontaringDTO(Long volontaringId, String skill, String availability) {
        this.volontaringId = volontaringId;
        this.skill = skill;
        this.availability = availability;
    }

    public Long getVolontaringId() {
        return volontaringId;
    }

    public void setVolontaringId(Long volontaringId) {
        this.volontaringId = volontaringId;
    }

    public String getSkill() {
        return skill;
    }

    public void setSkill(String skill) {
        this.skill = skill;
    }

    public String getAvailability() {
        return availability;
    }

    public void setAvailability(String availability) {
        this.availability = availability;
    }
}
