package njuics.demos.petsalon.model;


import javax.persistence.MappedSuperclass;

@MappedSuperclass
public class EntityNamed extends BasedEntity{
    private String name;

    public String getName(){return this.name;}

    public void setName(String name){this.name = name;}

}
