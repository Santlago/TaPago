package br.com.fiap.tapago.model;

import org.hibernate.annotations.IdGeneratorType;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

// @Getter 
// @Setter
// @RequiredArgsConstructor
// @EqualsAndHashCode
@Data
@Entity
public class Categoria {
    
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String nome;
    private String icone;
}
