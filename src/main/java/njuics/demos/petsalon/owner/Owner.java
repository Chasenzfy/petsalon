package njuics.demos.petsalon.owner;

import lombok.Data;
import njuics.demos.petsalon.model.EntityNamed;
import njuics.demos.petsalon.pet.Pet;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.validation.constraints.Digits;
import javax.validation.constraints.NotNull;
import java.util.Set;

@Data
@Entity
public class Owner extends EntityNamed {
    @Column(name = "address")
    @NotNull
    private String address;

    @Column(name = "city")
    @NotNull
    private String city;

    @Column(name = "telephone")
    @NotNull
    @Digits(fraction = 0, integer = 10)
    private String telephone;

    @OneToMany(cascade = CascadeType.ALL,mappedBy = "owner")
    private Set<Pet> pets;

}
