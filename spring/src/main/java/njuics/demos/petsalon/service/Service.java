package njuics.demos.petsalon.service;

import lombok.Data;
import njuics.demos.petsalon.model.EntityNamed;
import njuics.demos.petsalon.owner.Owner;
import njuics.demos.petsalon.pet.Pet;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.persistence.criteria.CriteriaBuilder;
import javax.validation.constraints.NotEmpty;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Entity
@Data
public class Service extends EntityNamed {
    @Column(name = "service_date")
    @NotEmpty
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date date;

    @Column(name = "service_fee")
    @NotEmpty
    private double fee;

    @NotEmpty
    @Column(name = "pet_id")
    private Integer petId;

    @JoinColumn(name = "service_category")
    private ServiceCategory serviceCategory;
}
