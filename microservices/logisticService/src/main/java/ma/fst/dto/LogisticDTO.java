package ma.fst.dto;

import ma.fst.entity.Status;
import ma.fst.entity.TypeLogistic;

public class LogisticDTO {
    private Long logisticId;

    private TypeLogistic type;

    private Status status;

    public LogisticDTO() {
    }

    public LogisticDTO(Long logisticId, TypeLogistic type, Status status) {
        this.logisticId = logisticId;
        this.type = type;
        this.status = status;
    }

    public Long getLogisticId() {
        return logisticId;
    }

    public void setLogisticId(Long logisticId) {
        this.logisticId = logisticId;
    }

    public TypeLogistic getType() {
        return type;
    }

    public void setType(TypeLogistic type) {
        this.type = type;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }
}
