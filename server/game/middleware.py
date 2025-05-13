import datetime
from django.conf import settings
from django.contrib.auth import logout
from django.utils.deprecation import MiddlewareMixin

class AutoLogoutMiddleware(MiddlewareMixin):
    def process_request(self, request):
        if not request.user.is_authenticated:
            return

        now = datetime.datetime.utcnow()
        last_activity = request.session.get('last_activity')

        if last_activity:
            elapsed = (now - datetime.datetime.fromisoformat(last_activity)).total_seconds()
            if elapsed > settings.SESSION_COOKIE_AGE:
                logout(request)
                request.session.flush()
                return  # No redirect since React handles UI

        request.session['last_activity'] = now.isoformat()