package njuics.demos.petsalon.owner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path="/owners")
public class OwnerController {
    @Autowired
    private OwnerRepository ownerRepository;

    @GetMapping(path="/add")
    public @ResponseBody
    String addNewOwner(@RequestParam String name, @RequestParam String address,
                        @RequestParam String city, @RequestParam String telephone){
        Owner owner = new Owner();
        owner.setName(name);
        owner.setAddress(address);
        owner.setCity(city);
        owner.setTelephone(telephone);
        ownerRepository.save(owner);
        return "New Owner Saved";
    }
    @RequestMapping(path="/all")
    public @ResponseBody Iterable<Owner> getAllOwners(){
        return ownerRepository.findAll();
    }
}
