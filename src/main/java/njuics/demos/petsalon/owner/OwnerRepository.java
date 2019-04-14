package njuics.demos.petsalon.owner;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.Repository;

public interface OwnerRepository extends CrudRepository<Owner,Integer> {
}
