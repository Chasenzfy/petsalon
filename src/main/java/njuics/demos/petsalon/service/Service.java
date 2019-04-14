package njuics.demos.petsalon.service;

import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity
@Data
public class Service {
    @Column(name = "service_date")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date date;

    @Column(name = "service_fee")
    private double fee;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinColumn(name = "service_category")
    private Set<ServiceCategory> categorySet;
}
