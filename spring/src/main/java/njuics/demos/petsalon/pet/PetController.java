package njuics.demos.petsalon.pet;

import njuics.demos.petsalon.owner.Owner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path="/pets")
public class PetController {
    @Autowired
    private PetRepository petRepository;

    @GetMapping(path="/add")
    public @ResponseBody
    String addNewPet(Owner owner,@RequestParam String name,@RequestParam PetType type){
        Pet pet = new Pet();
        pet.setName(name);
        pet.setType(type);
        owner.addPet(pet);
        petRepository.save(pet);
        return "Add New Pet";
    }
}
