package njuics.demos.petsalon.service;

import njuics.demos.petsalon.pet.Pet;
import org.springframework.data.repository.CrudRepository;


public interface ServiceReposity extends CrudRepository<Service,Integer> {

}