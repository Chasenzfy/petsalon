package njuics.demos.petsalon.pet;

import njuics.demos.petsalon.owner.Owner;
import org.springframework.data.repository.CrudRepository;


public interface PetRepository extends CrudRepository<Pet,Integer> {
    
}