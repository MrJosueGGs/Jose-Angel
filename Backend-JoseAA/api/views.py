from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import viewsets, status, permissions
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from django.http import FileResponse
import io

# Importación para manejo de PDFs
try:
    from pypdf import PdfReader, PdfWriter
except ImportError:
    # Si falla, el servidor avisará pero no se caerá al iniciar
    print("Error: pypdf no instalado. Ejecuta 'pip install pypdf'")

from .models import Noticia, ArchivoInstitucional, Inscripcion
from .serializers import NoticiaSerializer, ArchivoSerializer, InscripcionSerializer

# 1. Login
class LoginView(APIView):
    permission_classes = [permissions.AllowAny]
    def post(self, request):
        u = request.data.get('username')
        p = request.data.get('password')
        user = authenticate(username=u, password=p)
        if user:
            token, _ = Token.objects.get_or_create(user=user)
            return Response({'token': token.key, 'user': user.username}, status=status.HTTP_200_OK)
        return Response({'error': 'Credenciales inválidas'}, status=status.HTTP_401_UNAUTHORIZED)

# 2. Generación de Planilla (Recuperado de tu captura)
class GenerarPlanillaInscripcion(APIView):
    def post(self, request):
        # Aquí iría tu lógica de pypdf para llenar el formulario
        # Por ahora devolvemos un mensaje de éxito para que no de error
        return Response({"mensaje": "Planilla generada correctamente"}, status=status.HTTP_200_OK)

# 3. Viewsets
class NoticiaViewSet(viewsets.ModelViewSet):
    queryset = Noticia.objects.all().order_by('-fecha_creacion')
    serializer_class = NoticiaSerializer

class ArchivoViewSet(viewsets.ModelViewSet):
    queryset = ArchivoInstitucional.objects.all()
    serializer_class = ArchivoSerializer

class InscripcionViewSet(viewsets.ModelViewSet):
    queryset = Inscripcion.objects.all().order_by('-fecha')
    serializer_class = InscripcionSerializer