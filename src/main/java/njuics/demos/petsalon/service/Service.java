package njuics.demos.petsalon.service;

import lombok.Data;
import njuics.demos.petsalon.model.EntityNamed;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.Date;
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

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinColumn(name = "service_category")
    private Set<ServiceCategory> categorySet;
}
