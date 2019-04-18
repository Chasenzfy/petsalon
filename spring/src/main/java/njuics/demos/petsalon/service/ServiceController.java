package njuics.demos.petsalon.service;


import njuics.demos.petsalon.pet.Pet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Date;


@Controller
@RequestMapping(path="/service")
public class ServiceController {
    @Autowired
    private ServiceRepository serviceRepository;

    @GetMapping(path="/add")
    public @ResponseBody
    String addNewService(Pet pet, @RequestParam String name, @RequestParam Date date,
                                  @RequestParam double fee){
        Service service = new Service();
        service.setName(name);
        service.setDate(date);
        service.setFee(fee);
        pet.addService(service);
        serviceRepository.save(service);
        return "Add New Service";
    }
}
