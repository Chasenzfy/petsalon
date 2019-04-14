package njuics.demos.petsalon.pet;

import lombok.Data;
import njuics.demos.petsalon.model.EntityNamed;
import njuics.demos.petsalon.owner.Owner;
import njuics.demos.petsalon.service.Service;

import javax.persistence.*;
import java.util.Set;

@Entity
@Data
public class Pet extends EntityNamed {

    @ManyToOne
    @JoinColumn(name = "type_id")
    private PetType type;

    @ManyToOne
    @JoinColumn(name = "owner_id")
    private Owner owner;

    @OneToMany(cascade = CascadeType.ALL,mappedBy = "petId",fetch = FetchType.EAGER)
    private Set<Service> serices;


}
