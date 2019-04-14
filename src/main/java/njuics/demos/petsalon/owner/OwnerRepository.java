package njuics.demos.petsalon.owner;

import org.springframework.data.repository.CrudRepository;

public interface OwnerRepository extends CrudRepository<Owner,Integer> {
    Owner findByName(String name);

    Owner findByNameaAndCity(String name,String city);
}
