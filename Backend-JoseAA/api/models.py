from django.db import models

class Noticia(models.Model):
    titulo = models.CharField(max_length=200)
    contenido = models.TextField()
    fecha_creacion = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.titulo

class ArchivoInstitucional(models.Model):
    nombre = models.CharField(max_length=200)
    archivo = models.FileField(upload_to='archivos/')

    def __str__(self):
        return self.nombre

class Inscripcion(models.Model):
    nombre_completo = models.CharField(max_length=255)
    cedula = models.CharField(max_length=20)
    seccion = models.CharField(max_length=100)
    fecha = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.nombre_completo} - {self.cedula}"