package njuics.demos.petsalon.owner;

import lombok.Data;
import njuics.demos.petsalon.model.EntityNamed;
import njuics.demos.petsalon.pet.Pet;

import javax.persistence.*;
import javax.validation.constraints.Digits;
import javax.validation.constraints.NotEmpty;
import java.util.HashSet;
import java.util.Set;

@Data
@Entity
public class Owner extends EntityNamed {
    @Column(name = "address")
    @NotEmpty
    private String address;

    @Column(name = "city")
    @NotEmpty
    private String city;

    @Column(name = "telephone")
    @NotEmpty
    @Digits(fraction = 0, integer = 10)
    private String telephone;

    Owner(){}
    public Owner(String name,String address,String city,String telephone){
        this.setName(name);
        this.setAddress(address);
        this.setCity(city);
        this.setTelephone(telephone);
    }
    @OneToMany(cascade = CascadeType.ALL,mappedBy = "owner")
    private Set<Pet> pets;

    protected Set<Pet> getPetsInternal() {
        if (this.pets == null) {
            this.pets = new HashSet<>();
        }
        return this.pets;
    }

    public void addPet(Pet pet) {
        if (pet.isNew()) {
            getPetsInternal().add(pet);
        }
        pet.setOwner(this);
    }


}
