package njuics.demos.petsalon.pet;

import lombok.Data;
import njuics.demos.petsalon.model.EntityNamed;
import njuics.demos.petsalon.owner.Owner;
import njuics.demos.petsalon.service.Service;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.HashSet;
import java.util.Set;

@Entity
@Data
public class Pet extends EntityNamed {

    @ManyToOne
    @NotEmpty
    @JoinColumn(name = "type_id")
    private PetType type;

    @ManyToOne
    @NotEmpty
    @JoinColumn(name = "owner_id")
    private Owner owner;

    @OneToMany(cascade = CascadeType.ALL,mappedBy = "petId",fetch = FetchType.EAGER)
    private Set<Service> serices;

    protected Set<Service> getServiceInternal() {
        if (this.serices == null) {
            this.serices = new HashSet<>();
        }
        return this.serices;
    }

    public void addService(Service service) {
        getServiceInternal().add(service);
        service.setId(this.getId());
    }
}
